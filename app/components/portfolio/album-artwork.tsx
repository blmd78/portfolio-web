"use client";

import { cn } from "@/lib/utils";

import { Album } from "./data/data";
import { Link } from "lucide-react";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <img
          src={album.cover}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]"
          )}
        />
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium leading-none">{album.name}</h3>
            <p className="text-xs text-muted-foreground">{album.artist}</p>
          </div>
          {album.link && (
            <div onClick={() => window.open(album.link)}>
              <Link
                size={25}
                className="mr-2 hover:bg-[#464646] p-1 rounded-lg  cursor-pointer"
              ></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
