import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

type InfoProps = {
    setShowModal: (type: boolean) => void
}
export default function Info({ setShowModal }: InfoProps) {

    return (
        <div className="fixed z-20 inline-flex items-center mx-auto inset-x-0 inset-y-0 bg-transparent  max-w-full ">
            <div className="container bg-gradient-to-r to-cyan-700 from-cyan-500 rounded-xl shadow-xl mx-auto max-w-4xl ">
                <div className="inline-flex items-center text-right rounded-full ml-[860px]  mt-2 p-2 hover:cursor-pointer bg-red-600 shadow-lg" onClick={() => setShowModal(false)}> <FontAwesomeIcon size='xs' icon={faX} style={{ color: "white" }} /></div>
                <div className="p-8 grid grid-cols-3 gap-2 -mt-8 ">
                    <div className="col-span-1 ">

                        <img className="rounded-xl shadow-lg"
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                            alt="/"
                        />

                        <div className="grid grid-row-1 gap-2 shadow-lg text-xs bg-gray-100 py-4 px-4 mt-2 col-span-3 rounded-xl">
                            <div className="flex justify-between">
                                <p>Calories: <span>472</span></p>
                                <p>Time: <span> +30 min</span></p>
                            </div>

                            <p>Price <span>$30</span></p>
                        </div>
                    </div>
                    <div className="bg-gray-50 py-2 px-3 shadow-lg col-span-2 rounded-xl max-h-[350px] overscroll-auto overflow-auto">
                        <h4 className='text-xl font-serif underline font-semibold'>Chiken Salad :</h4>

                        <p className='py-2'>
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    )

}