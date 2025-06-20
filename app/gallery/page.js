import Gallery from "@/components/gallery/Gallery_1";
import Location from '@/components/findus/FindUs_1'
import { siteConfig } from '@/config/siteConfig'

export const metadata = siteConfig.metadata.gallery;

export default function GalleryPage() {
  return (
    <main>
      <section className="py-24 px-6 md:px-12 text-center bg-[#f9f7f4] border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-900">Our Gallery</h1>
          <p className="text-lg text-gray-600 mb-10">
            A glimpse inside our seaside café and some of the fresh food and drinks we serve daily in Brighton.
          </p>
        </div>
      </section>

      <Gallery />
      <Location />
    </main>
  );
}