import { ethers } from "ethers";




// 0xb802d6AF3924A1386038bA69DF29d996B4cA172E

const cntaddress = "0xb802d6AF3924A1386038bA69DF29d996B4cA172E";

let walletprovider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const {ethereum} =window;
    walletprovider = new  ethers.providers.Web3Provider(
      ethereum
    )
} else {
  
}





const Buy = ({ state }) => {

  const buyChai = async (event) => {
    
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    console.log(name, message, contract);
    alert(name);
    alert("moving to meesage");
    alert(message);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message,amount);
    await transaction.wait();
    alert(name);
    alert("moving to meesage");
    alert(message);
    console.log("Transaction is done");
    
  };
  

  return (
    <>
      <div name = "contact" className = "w-full  ml-28 p-6">
        <div className = "flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
            <div className = " mn pb-8">
                <p className = "text-4xl font-bold text-center  flex items-center justify-center">Discusssion Ledger
                  {/* <Image src = {Coffee} height="50" width="50" className = "mx-3 transform flip-horizontal" /> */}
                </p>
                <p className = "py-6 text-center text-xl font-semibold">Submit Your Views by filling  the form below .</p>
            </div>

            <div className = "flex justify-center items-center">
                <form  onSubmit={buyChai} className = "flex flex-col w-full md:w-1/2">
                    <input type = "text" id = "name" placeholder = "Enter Course name" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-blue" />
                    <textarea placeholder = "Enter your Review Message" id = "message" rows = "8" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-blue" />
                    <button  type="submit"
                  disabled={!state.contract} className = " btn btn-primary px-6 py-6 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white  font-semibold" >Fill this form and Get Direct NFT </button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};
export default Buy;