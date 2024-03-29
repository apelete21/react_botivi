import Head from "next/head";
import Logo from "@/utils/icons/logo";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-950 dark:text-white overflow-x-hidden">
        <section className="h-screen bg-transparent w-screen flex flex-column sm:flex-row">
          <div className="text-black dark:text-white flex-1 gap-12 flex flex-col justify-center items-center">
            <h1 className="w-full sm:w-2/3 text-left text-6xl font-bold">
              Le Bot qui vous facilite le quotidien
            </h1>
            <div className="text-left text-2xl w-full sm:w-2/3 ">
              <Link
                href="#"
                className="px-8 py-3 hover:bg-blue-600 bg-blue-500 text-white rounded-full"
              >
                Start here
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/security.svg"}
              alt="home"
              placeholder="blur"
              blurDataURL="/security.svg"
              width={700}
              height={500}
            />
          </div>
        </section>
        <section className="w-screen bg-blue-100 dark:bg-gray-900 py-10">
          <section className="gap-3 w-3/4 m-auto flex flex-column sm:flex-row ">
            <section className="grid gap-3 w-2/6">
              <h1 className="text-2xl font-bold text-blue-500">
                Réduction des coûts
              </h1>
              <br />
              <p>
                Botivi permet aux entreprises togolaises de réduire leurs coûts
                en rendant des services, ensuite faciliter l'accès à ceux qui
                utilisent leurs services.
              </p>
            </section>
            <section className="grid gap-3 w-2/6">
              <h1 className="text-2xl font-bold text-blue-500">
                Communication instantanée
              </h1>
              <br />
              <p>
                Botivi facilite la communication entre le clients et les
                entreprises fournisseurs de services
              </p>
            </section>
            <section className="grid gap-3 w-2/6">
              <h1 className="text-2xl font-bold text-blue-500">
                Securité en ligne
              </h1>
              <br />
              <p>
                Botivi permet la compilation des services de plusieurs
                entreprises en toute sécurité.
              </p>
            </section>
          </section>
        </section>
        <section className="h-screen bg-transparent w-screen flex flex-column sm:flex-row">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/security.svg"}
              alt="home"
              placeholder="blur"
              blurDataURL="/security.svg"
              width={500}
              height={500}
            />
          </div>
          <div className="text-black dark:text-white flex-1 gap-12 flex flex-col justify-center items-center">
            <h1 className="w-full sm:w-2/3 text-left text-5xl font-bold">
              Accéder à vos services de façon instantannée
            </h1>
            <div className="text-left text-2xl w-full sm:w-2/3 ">
              <Link
                href="#"
                className="px-8 py-3 hover:bg-blue-600 bg-blue-500 text-white rounded-full"
              >
                S’abonner à Botivi
              </Link>
            </div>
          </div>
        </section>
        <section className="h-screen bg-transparent w-screen bg-blue-100 dark:bg-gray-900 flex flex-column sm:flex-row">
          <div className="text-black dark:text-white flex-1 gap-12 flex flex-col justify-center items-center">
            <h1 className="w-full sm:w-2/3 text-left text-5xl font-bold">
              Baissez le coût de vos bots whatsapp
            </h1>
            <p className="w-full sm:w-2/3 text-left">
              Commencer à économizer avec Botivi ?
            </p>
            <p className="w-full sm:w-2/3 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempor velit sed mattis gravida. Pellentesque luctus quam id
              sapien vehicula tempus. Sed mollis diam nisl, vel cursus nulla
              tristique nec. Aliquam vel volutpat velit. Proin nibh orci, dictum
              ut consectetur vel, ultricies ut diam.
            </p>
            <div className="text-left text-2xl w-full sm:w-2/3 ">
              <Link
                href="#"
                className="px-8 py-3 hover:bg-blue-600 bg-blue-500 text-white rounded-full"
              >
                Commencer maintenant
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/price.svg"}
              alt="home"
              placeholder="blur"
              blurDataURL="/price.svg"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="h-screen bg-transparent w-screen flex flex-column sm:flex-row">
          <div className="text-black dark:text-white flex-1 gap-12 flex flex-col justify-center items-center">
            <h1 className="w-full sm:w-2/3 text-left text-5xl font-bold">
              Sécurité maximale de vos transmissions
            </h1>
            <p className="w-full sm:w-2/3 text-left">
              Pour Botivi, votre sécurité et votre satisfaction est sa priorité
              !
            </p>
            <p className="w-full sm:w-2/3 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempor velit sed mattis gravida. Pellentesque luctus quam id
              sapien vehicula tempus. Sed mollis diam nisl, vel cursus nulla
              tristique nec. Aliquam vel volutpat velit. Proin nibh orci, dictum
              ut consectetur vel, ultricies ut diam.
            </p>
            <div className="text-left text-2xl w-full sm:w-2/3 ">
              <Link
                href="#"
                className="px-8 py-3 hover:bg-blue-600 bg-blue-500 text-white rounded-full"
              >
                Voir nos offres
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/security.svg"}
              alt="home"
              placeholder="blur"
              blurDataURL="/security.svg"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section className="h-1/3 py-12 bg-transparent w-screen grid">
          <h1 className="text-center font-extrabold text-4xl pb-8 w-full sm:w-2/3 mx-auto">
            Nos souscriptions
          </h1>
          <div>
            <div className="w-2/3 flex mx-auto gap-12 mt-10">
              <div className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center rounded-lg">
                <p className="font-bold text-6xl">152,5$</p>
                <p className="text-2xl">monthly</p>
              </div>
              <div className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center rounded-lg">
                <p className="font-bold text-6xl">873,6$</p>
                <p className="text-2xl">half-yearly</p>
              </div>
              <div className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center rounded-lg">
                <p className="font-bold text-6xl">1659,5$</p>
                <p className="text-2xl">yearly</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="h-1/3 pt-12 pb-5 bg-blue-100 dark:bg-gray-900 w-screen mt-12 grid">
          <h1 className="text-center font-extrabold text-4xl pb-8 w-full sm:w-2/3 mx-auto grid justify-center">
            <Logo color="skyblue" />
          </h1>
          <div>
            <div className="w-2/6 flex mx-auto gap-12 mt-2">
              <Link
                href="#"
                className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center hover:opacity-50"
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center hover:opacity-50"
              >
                Features
              </Link>
              <Link
                href="#"
                className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center hover:opacity-50"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center hover:opacity-50"
              >
                Help
              </Link>
              <Link
                href="#"
                className="flex-1 bg-blue-100 dark:bg-gray-900 w-2/6 h-auto px-2 py-8 grid gap-8 text-center hover:opacity-50"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="w-full flex m-auto justify-between px-12 mt-2 items-center">
            <h1 className="font-extrabold flex-1 text-4xl pb-8 w-fit h-full mt-8">
              Sign up to our newsletter
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-fit flex flex-1 gap-8 h-full justify-end"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-2/3 rounded-md focus:outline-none p-2"
              />
              <button
                type="submit"
                className=" bg-blue-500 text-white px-8 rounded-md "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex mx-12 justify-between pt-6 mt-2 items-center border-t-2 border-blue-200">
            <p className="flex flex-1">CopyRight 2023 Botivi, All Rights Reserved.</p>
            <div className="flex flex-1 justify-end gap-6">
              <img className="w-8 rounded" src="/linkedin.svg" alt="linkedin" />
              <img className="w-8 rounded" src="/insta.svg" alt="linkedin" />
              <img className="w-8 rounded" src="/twitter.svg" alt="linkedin" />
              <img className="w-8 rounded" src="/facebook.svg" alt="linkedin" />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
