import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

export default function Form() {
    const flag: boolean = true;

    return (
        <div className="container mx-auto py-6">
            {flag ? <AddUserForm /> : <UpdateUserForm />}
        </div>
    );
}
