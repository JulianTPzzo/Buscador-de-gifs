
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( {category} ) => {

const { images, isLoading } = useFetchGifs( category ); //Custom Hook

    return (
        <>
             <h3>{ category }</h3> {/*A GifGrid se lo llama con categories.map en GifExpertApp por eso tiene las category */}
            
            {
                isLoading && (<h2>Cargando...</h2>) // Si isLoading = true entonces muestro h2
                

            }
            
            

            <div className="card-grid">
                
                { 
                    // images.map(img => (
                    //     <li key={ img.id}>{img.title}</li>
                    // )) 
                    images.map(( image ) => (
                            <GifItem 
                                key={image.id}
                                {...image } //exparse todas las propiedades en el GifItem
                                />
                        ))
                }
            
            </div>
        </>
    )

}
