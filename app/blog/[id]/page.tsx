const getPostById = async (id: number) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return post.json();
}

const getAllPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await posts.json()
}

export async function  generateStaticParams(){
    const posts = await getAllPosts()

    return posts.map((post:any) => ({
        id:post.id.toString(),
    }))
}

export default async function Page({params} : any) {
    const { id  } = await params
    const {body , title} = await getPostById(id)
    return (
        <>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </>
    );
}
