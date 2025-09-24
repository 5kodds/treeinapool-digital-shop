import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
  author_id: string;
  published: boolean;
  featured_image_url?: string;
  created_at: string;
  updated_at: string;
  profiles?: {
    display_name?: string;
  };
}

export const useBlogPosts = (published: boolean = true) => {
  return useQuery({
    queryKey: ['blog-posts', published],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          profiles (
            display_name
          )
        `)
        .order('created_at', { ascending: false });

      if (published) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });
};

export const useMyBlogPosts = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['my-blog-posts', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('author_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: !!user,
  });
};

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  return useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id' | 'author_id' | 'created_at' | 'updated_at'>) => {
      if (!user) throw new Error('Not authenticated');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          ...post,
          author_id: user.id,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['my-blog-posts'] });
    },
  });
};