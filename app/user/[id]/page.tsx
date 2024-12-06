export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/user' , {
        next: {
            revalidate:10
        }
    })
    const users = await res.json()


    console.log(users , 'users')
    return users.map((user: any) => ({
        id: user.id.toString(),
    }))

}

const getUserById = async (id: string) => {
    const res = await fetch(`http://localhost:4000/user/${id}`);

    return await res.json();

}

export default async function Page({params}: any) {

    const {id} = await params;
    const user = await getUserById(id)

    return (

        <>
            <div>{id}</div>
            <div>{user.login}</div>
            <div>{user.password}</div>
        </>

    )


}