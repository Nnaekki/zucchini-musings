import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import fetcher from "@/library/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

const section3 = () => {
  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  SwiperCore.use([Autoplay]);

  return (
    <section className="container mx-auto sm:px-10  md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value}></Post>
          </SwiperSlide>
        ))}
        {/* ... */}
      </Swiper>
    </section>
  );
};

function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;

  return (
    <div className="grid">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={600} height={400} alt={""} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            {" "}
            - {published || "Unknown"}
          </Link>
        </div>

        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "No Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "No Description"}</p>
        {author ? <Author {...author}/> : <></>}
      </div>
    </div>
  );
}

export default section3;
