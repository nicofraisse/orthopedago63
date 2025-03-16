import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-sm transform -translate-x-1 translate-y-1"></div>
      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image
          src="/uploads/photo-profil.jpg"
          alt="Maryline Moins"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
