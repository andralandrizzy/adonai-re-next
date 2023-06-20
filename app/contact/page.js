"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PagesDetailsHero from "@/components/PagesDetailsHero";
import HeadIntro from "@/components/HeadIntro";
import ContactForm from "@/components/forms/ContactForm";
import ContactHeroBg from '@/public/img/contactus_com.jpeg'



const ContactUs = () => {
    const router = useRouter();
    // const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ name: "", email: "", subject: "", phone: "", message: "" });

    const createMessage = async () => {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact/new", {
                method: "POST",
                body: JSON.stringify({
                    // userId: session?.user.id,
                    name: post.name,
                    email: post.email,
                    subject: post.subject,
                    phone: post.phone,
                    message: post.message,
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PagesDetailsHero ImageBg={ContactHeroBg} text='Contact us' href="/" prev="home" current="contact" />
            <HeadIntro text={'Get In Touch'} desc={`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Culpa perspiciatis exercitationem debitis maxime et, 
            recusandae nam quisquam perferendis obcaecati dolorum quibusdam sed esse quo officia!`} />
            <ContactForm
                type='Create'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createMessage}
            />
        </>
    );
};

export default ContactUs;