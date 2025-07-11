'use client';
import { useTranslations } from 'next-intl';
import Button from '@components/button';
import { Mail, Phone, Github, Linkedin, ArrowLeft, SendHorizonal } from 'lucide-react';
import { useAppContext } from '@contexts/appContext';
import { useEffect } from 'react';
import Input from '@components/input';
import showToast from '@utils/showToast';

const ContactPage: React.FC = () => {
    const t = useTranslations('contact');
    const { setHideHeader } = useAppContext();

    useEffect(() => {
        setHideHeader(true);
        return () => {
            setTimeout(() => setHideHeader(false), 500);
        };
    }, [setHideHeader]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const message = formData.get('message') as string;

        if (!name.trim() || !message.trim()) {
            showToast("Please fill out both name and message fields", "warning");
            return;
        }

        const emailBody = `Name: ${name}\n\nMessage: ${message}`;
        window.location.href = `mailto:asylbek.komyt.dev@proton.me?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;

        form.reset();
    };

    return (
        <section className="flex items-center justify-center bg-black w-dvw min-h-dvh">
            <main className="flex flex-col max-w-[600px] min-w-[300px] py-8 px-4">
                <Button data-aos="fade-down" variant='accentOutline' styles="group mb-6" onClick={() => window.location.href = '/'} icon={<ArrowLeft width={20} className='transition-transform duration-300 ease-out group-hover:-translate-x-[6px]' />}>Back</Button>
                <h1 className="mb-6 text-3xl font-semibold text-white" data-aos="fade-down">{t('title')}</h1>
                <form className="flex flex-col" onSubmit={handleSubmit} data-aos="fade-up">
                    <Input
                        placeholder={"Your name"}
                        inputLabel={"Name"}
                        inputText='/50'
                        maxChar={50}
                        letCount={true}
                        name="name"
                    />
                    <Input
                        placeholder={"Your message"}
                        inputLabel={"Message"}
                        inputText='/500'
                        maxChar={500}
                        letCount={true}
                        textarea={true}
                        name="message"
                    />
                    <Button variant="accent" styles='mt-4 group' type="submit" icon={<SendHorizonal width={20} className='transition-transform duration-300 ease-out group-hover:translate-x-[6px]' />}>{t('send')}</Button>
                </form>
                <div className="flex flex-col mt-8 gap-y-4" data-aos="fade-up" data-aos-delay="200">
                    <a href="mailto:asylbek.komyt.dev@proton.me" className="flex items-center text-white gap-x-2 hover:text-accent" aria-label="Email">
                        <Mail size={20} /> asylbek.komyt.dev@proton.me
                    </a>
                    <a href="tel:+77787050395" className="flex items-center text-white gap-x-2 hover:text-accent" aria-label="Phone">
                        <Phone size={20} /> +77787050395
                    </a>
                    <a href="https://github.com/Harakirigi" className="flex items-center text-white gap-x-2 hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/asylbek-komyt-23817231b/" className="flex items-center text-white gap-x-2 hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </div>
            </main>
        </section>
    );
};

export default ContactPage;