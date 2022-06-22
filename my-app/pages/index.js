
import Form from "../components/Form"
export default function Home() {
  return (
    <>
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{"backgroundImage": "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
					></div>
		
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Subscribe!</h3>
					 <Form />
					</div>
				</div>
			</div>
		</div>
    </>
  )
}
