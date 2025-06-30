"use client";

import React from "react";
import Image from "next/image";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-[#070813] text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-pink-500 hover:scale-[1.02] ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-gray-400 ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export default function CardComponent() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        {/* Exemplo com imagem no topo */}
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mt-8 mb-4 p-[2px] bg-gradient-to-br from-pink-500 to-purple-600">
          <div className="rounded-full overflow-hidden w-full h-full bg-[#070813]">
            <Image
              src="/path/to/image.png"
              alt="Exemplo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <CardTitle>Exemplo de Título</CardTitle>
        <CardDescription>Descrição do card explicando seu conteúdo.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo principal do card vai aqui.</p>
      </CardContent>
      <CardFooter>
        <p>Ações ou rodapé do card.</p>
      </CardFooter>
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
