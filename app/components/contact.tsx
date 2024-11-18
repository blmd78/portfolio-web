"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const mapContainerStyle = {
  width: "100%",
  height: "500px",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
};

const center = {
  lat: 48.8566,
  lng: 2.3522, // Coordonnées de Paris
};

const darkModeStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#2b2b2b" }], // Fond plus foncé
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }], // Noms des rues en blanc
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#2b2b2b" }], // Couleur de fond des textes
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#000000" }], // Routes en noir pour bien ressortir
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ visibility: "off" }], // Masque les points d'intérêt (POI)
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Masque les étiquettes des POI
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ visibility: "off" }], // Masque les éléments de transit
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#1f1f1f" }], // Plans d'eau en gris foncé
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Masque les étiquettes administratives
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }], // Masque les icônes sur les routes
  },
];

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          options={{ mapTypeId: 'terrain',styles: darkModeStyle }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <h1 className="text-2xl font-bold">Contact Form</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Première ligne avec deux champs */}
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className=" bg-[#2E2E2E]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className=" bg-[#2E2E2E]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Deuxième champ sur toute la largeur */}
          {/* bg-[#2E2E2E] border-none text-white hover:bg-[#464646] */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className=" bg-[#2E2E2E]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" className="bg-[#2E2E2E]  hover:bg-[#464646]">
              <Send /> Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
