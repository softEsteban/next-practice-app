import { BiEdit, BiTrashAlt } from 'react-icons/bi'
import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer'

interface DataRow {
    id: number;
    name: string;
    avatar: string;
    email: string;
    salary: number | string;
    date: string;
    status: string;
}

export default function Table() {


    const { isLoading, isError, data, error } = useQuery('users', getUsers)

    if (isLoading) {
        return <div>Users are loading ... </div>
    }
    if (isError) {
        return <div>Got error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
    }


    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-600">
                    <th className="px-16 py-2"><span className="text-gray-200">Name</span></th>
                    <th className="px-16 py-2"><span className="text-gray-200">Email</span></th>
                    <th className="px-16 py-2"><span className="text-gray-200">Salary</span></th>
                    <th className="px-16 py-2"><span className="text-gray-200">Birthday</span></th>
                    <th className="px-16 py-2"><span className="text-gray-200">Active</span></th>
                    <th className="px-16 py-2"><span className="text-gray-200">Actions</span></th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data.map((obj: DataRow, i: number) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}

function Tr({ id, name, avatar, email, salary, date, status }: DataRow) {

    const visible = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const onUpdate = () => {
        dispatch(toggleChangeAction());
    }

    return (
        <tr>
            <td className="px-16 py-2 flex flex-row items-center">
                <img src={avatar} alt="" className='h-8 w-8 rounded-full object-cover' />
                <span className="text-center ml-2 font-semibold">
                    {name || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span className="text-center ml-2">
                    {email || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span className="text-center ml-2">
                    ${salary || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span className="text-center ml-2">
                    {date || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <button className="cursor">
                    <span className={` ${status == "Active" ? 'bg-green-500' : 'bg-rose-500'}  text-white px-5 py-1 rounded-full`}>{status || "Unknown"}</span>
                </button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
                <button className="cursor" onClick={onUpdate}>
                    <BiEdit size={25} color={"rgb(34,197,94)"} />
                </button>
                <button className="cursor">
                    <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
                </button>
            </td>
        </tr>
    );
}
