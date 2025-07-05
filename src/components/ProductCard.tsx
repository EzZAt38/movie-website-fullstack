
import ButtonComponent from "../ui/ButtonComponent";
import { Imovie, styles} from "../interfaces/interface";
import Image from "./Image";
import { useState } from "react";
import MyModal from "../ui/DailogModle";
const ProductCard =({adult,overview,title,poster_path,poster_Base}:Imovie) => {
    const [deleteProduct, setDeleteProduct] = useState(false);
  console.log(adult)
  return (
    <div className={styles.icardparents}>
      {/* the header side */}
      <div className={styles.icardHeader}>
        <div className="imageSide">
          <Image
            imageURL={`${poster_Base}${poster_path}`}
            alt="product image"
            className="rounded-md w-full"
          />
        </div>
        <h1 className="text-2xl p-0.7 text-center ">{title}</h1>
      </div>
      {/* the header side */}
      {/* this is the footer side */}
      {/* price and category side */}
      {/* price and category side */}
      {/* this is the footer side */}
      <div className="footer flex  space-x-2 p-1">
        <ButtonComponent color={styles.submit} children="About Movie" onClick={()=>setDeleteProduct(true)}/>
      </div>
       <MyModal
        isOpen={deleteProduct}
        title=""
        closeModal={() => setDeleteProduct(false)}
      >
        <div>
          <h1 className="text-xl font-bold mb-4">
            Infromation about this movie
          </h1>
          {adult? <p className="text-lg font-semibold">notes:this move is +18</p>:null}
          <p>{overview}</p>
          <div className="mt-4 flex space-x-2">
            <ButtonComponent
              color={"bg-gray-400 shadow-gray-500 hover:bg-gray-600"}
              children="Cancel"
              onClick={() => setDeleteProduct(false)}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default ProductCard;
