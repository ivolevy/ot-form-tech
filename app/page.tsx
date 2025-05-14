import MultiStepForm from "@/components/multi-step-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="w-full bg-black text-white py-5">
        <div className="flex items-center gap-3 container mx-auto">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-600 text-white">
            <span className="text-xl font-bold">T</span>
          </div>
          <h1 className="text-xl font-bold">TECH SECURITY S.R.L.</h1>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="mb-8 mt-8">
          <h2 className="border-l-4 border-red-600 pl-3 text-2xl font-bold">Aprobación de Evento</h2>
        </div>
        <div className="w-full mx-auto">
          <MultiStepForm />
        </div>
      </div>
    </main>
  )
}
