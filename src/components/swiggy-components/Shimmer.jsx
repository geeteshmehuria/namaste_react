import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ShimmerCard = () => {
  return (
    <Card className="m-2 w-50 h-80 pt-0">
      <Skeleton className="w-full h-40 rounded-none" />
      <CardHeader>
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
};

const Shimmer = () => {
  return (
    <div className="gap-4 p-4">
      <div className="flex gap-4">
        <Skeleton className="h-8 w-80 m-2" />
        <Skeleton className="h-8 w-48 m-2" />
      </div>
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 100 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="p-4 max-w-2xl">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="w-full h-72 rounded-lg my-4" />
      <Skeleton className="h-7 w-2/3 mb-3" />
      <Skeleton className="h-4 w-1/3 mb-2" />
      <Skeleton className="h-4 w-1/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-6" />

      <Skeleton className="h-6 w-40 mb-3" />
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-1/2 mb-2" />
      ))}
    </div>
  );
};

export default Shimmer;
