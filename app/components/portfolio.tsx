import React from "react";
import { AlbumArtwork } from "./portfolio/album-artwork";
import { madeForYouAlbums } from "./portfolio/data/data";
import { Separator } from "@/components/ui/separator";

const Portfolio: React.FC = () => {
  return (
    <div>
       <h1 className="text-2xl font-bold">Portfolio</h1>
       <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        {madeForYouAlbums.map((album) => (
          <AlbumArtwork
            key={album.name}
            album={album}
            className="w-full"
            aspectRatio="square"
            width={300}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
