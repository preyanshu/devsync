import { currentUser } from '@clerk/nextjs'
// import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'
// import { fetchUser } from 'pages/api/user/[id]'
import { fetchUser } from '@/lib/actions/user.actions'
import PostThread  from '@/components/forms/PostThread'



import React from 'react'



const page = async() => {
    const user = await currentUser();
    if(!user) return null

    const  userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) return redirect('/onboarding');
  return (
    <>
    <div className="head-text">
       Post
    </div>
    <PostThread  userId={userInfo._id}/>
    </>
  )
}

export default page
