import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  aspectRatio?: string;
  className?: string;
}

const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ 
    src, 
    alt, 
    priority = false, 
    fill = false, 
    sizes = '100vw',
    aspectRatio,
    className,
    ...props 
  }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    const baseClasses = cn(
      "transition-opacity duration-300",
      fill ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full object-cover",
      isLoading ? "opacity-0" : "opacity-100",
      className
    );

    return (
      <div className={cn("relative", aspectRatio && `aspect-[${aspectRatio}]`)}>
        {isLoading && (
          <Skeleton className={cn(
            "absolute inset-0 w-full h-full",
            aspectRatio && `aspect-[${aspectRatio}]`
          )} />
        )}
        
        {hasError ? (
          <div className={cn(
            "flex items-center justify-center bg-muted text-muted-foreground text-sm",
            fill ? "absolute inset-0 w-full h-full" : "w-full h-full",
            aspectRatio && `aspect-[${aspectRatio}]`
          )}>
            Failed to load image
          </div>
        ) : (
          <img
            ref={ref}
            src={src}
            alt={alt}
            className={baseClasses}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            {...(priority && { fetchPriority: "high" as const })}
            {...props}
          />
        )}
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export { OptimizedImage };