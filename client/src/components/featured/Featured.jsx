import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = ()=> {

    const {data, loading, error} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=Quebec,Calgary,NiagaraFalls")
    console.log(data)
    return(
        
            <div className="featured">
                {loading ? "Loading, please wait" :
                <>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/653256.jpg?k=db29effa75f45141e936338a82b0ca45d1a970acf280216cb28ae1a785ab447a&o="alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Quebec City</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/653240.jpg?k=6b015a87c8443039a685038e97dd58dab6a8748078948b27cca7d1a5fcef308d&o=" alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Niagara Falls</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/653170.jpg?k=3ee0b028403414ba8b687fda2b42a7047fc043c44e75cba225c714bea6108570&o="alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Calgary</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div></>}
            </div>
        
    )
}
export default Featured;