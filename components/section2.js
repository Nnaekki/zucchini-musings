import Link from "next/link";
import Image from "next/image";
import Author from "../components/_child/author";
import fetcher from "@/library/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

const section2 = () => {

const{data, isLoading, isError} = fetcher('api/posts')

if(isLoading) return <Spinner/>;
if(isError) return <Error />

  return (
    <section className="container mx-auto sm:px-10 md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value, index) =>(
            <Post data={value} key={index}></Post>
          ))
        }
      </div>
    </section>
  );
};

function Post({data}) {
  const{id, title, category, img, description, published, author}=data;
  return (
    <div className="item">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image
            src={img ||"/"}
            className="rounded"
            width={500}
            height={350}
            alt={""}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">
           {category || "Unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
            {" "}
            - {published || "Unknown"}
          </Link>
        </div>

        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "No Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quibusdam eos quas obcaecati saepe optio, laudantium nisi doloremque
          fuga animi enim eligendi quis, ea recusandae nihil repellendus dolor.
          Officiis, dolorum.
        </p>
        {author ? <Author {...author}/> : <></>}
      </div>
    </div>
  );
}

export default section2;
