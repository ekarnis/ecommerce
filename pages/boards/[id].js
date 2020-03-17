import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ReviewBox from "../../components/ReviewBox";

export default function Board() {
  const router = useRouter();

  const wood = router.query.id.split("-")[0];
  const width = router.query.id.split("-")[1];
  const length = router.query.id.split("-")[2];
  const thickness = router.query.id.split("-")[3];
  const stain = router.query.id.split("-")[4];

  const reviews = [
    {
      id: 0,
      name: "Mary Jones",
      country: "Canada",
      stars: 5,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    },
    {
      id: 1,
      name: "Ted Janes",
      country: "Canada",
      stars: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam."
    },
    {
      id: 2,
      name: "Mary Jones",
      country: "Canada",
      stars: 5,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    },
    {
      id: 3,
      name: "Mary Jones",
      country: "Canada",
      stars: 5,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    },
    {
      id: 4,
      name: "Mary Jones",
      country: "Canada",
      stars: 5,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    }
  ];

  const reviewBoxes = reviews.map(review => (
    <ReviewBox key={review.id} {...review}></ReviewBox>
  ));

  return (
    <Layout>
      <div className="flex mb-10">
        <div className="w-2/3 flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg">
          <img src={"/board.jpg"}></img>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg">
            <div className="w-full flex justify-between">
              <h3 className="text-4xl font-bold text-indigo-500">$50 CAD</h3>
              <h3 className="text-4xl font-bold text-indigo-500">{wood}</h3>
            </div>
            <div className="w-full">
              <span className="float-right">
                {width}cm x {length}cm x {thickness}cm
              </span>
            </div>
            <div className="w-full mb-4">
              <span className="float-right">{stain}</span>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <span className="mt-4">
              We have <span className="text-indigo-500">7</span> in stock
            </span>
            <div>
              <button className="inline-block text-md px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 mr-2">
                -
              </button>
              <span>1</span>
              <button className="inline-block text-md px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 ml-2 mr-2">
                +
              </button>
              <button className="inline-block text-md px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-4xl font-bold text-indigo-500">Reviews</h3>
      <div className="flex flex-wrap">{reviewBoxes}</div>
    </Layout>
  );
}
