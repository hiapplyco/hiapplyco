import LoadingSkeleton from './LoadingSkeleton';

interface LoadingCardProps {
  showIcon?: boolean;
  showTags?: boolean;
}

const LoadingCard = ({ showIcon = true, showTags = false }: LoadingCardProps) => {
  return (
    <div className="glass p-8 rounded-xl">
      {showIcon && (
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted shimmer-effect" />
        </div>
      )}
      
      <LoadingSkeleton variant="text" className="h-6 w-2/3 mb-4" />
      <LoadingSkeleton variant="text" lines={3} className="mb-6" />
      
      {showTags && (
        <div className="flex gap-2 mt-4">
          <LoadingSkeleton variant="button" />
          <LoadingSkeleton variant="button" className="w-20" />
          <LoadingSkeleton variant="button" className="w-16" />
        </div>
      )}
    </div>
  );
};

export default LoadingCard;