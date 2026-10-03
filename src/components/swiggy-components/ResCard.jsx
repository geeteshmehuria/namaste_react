import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResCard = (props) => {
  const { resName, rating, location, imgUrl } = props;
  return (
    <Card className="m-2 w-50 h-80 hover:shadow-md transition-shadow">
      <img
        src={imgUrl}
        alt={resName}
        loading="lazy"
        className="w-full h-40 object-cover bg-muted"
      />
      <CardHeader>
        <CardTitle className="font-bold line-clamp-2" title={resName}>
          {resName}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-1">
        <Badge>Rating : {rating}</Badge>
        <Badge variant="secondary">Location : {location}</Badge>
      </CardContent>
    </Card>
  );
};

export const withPromotedLebel = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        <Badge className="absolute top-0 left-0">Promoted</Badge>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
