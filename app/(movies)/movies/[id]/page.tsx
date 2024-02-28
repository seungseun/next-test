
import { Suspense } from "react";
// import { API_URL } from "../../../(home)/page";
import MoveInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-vieos";
import { getMovie } from "../../../../components/movie-info";

interface IParams{
  params: {id:string};
}

export async function generateMetadata({params: {id}} : IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// async function getMovies(id:string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id:string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({params: {id}} : {params: {id :string}}) {
  // const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  return   <div>
    <Suspense fallback={<h1>Loading movie info</h1>}>
     <MoveInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
     <MovieVideos id={id}/>
    </Suspense>
</div>
 
}