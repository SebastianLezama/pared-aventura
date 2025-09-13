import ContentProduct from "@/components/content-product"
import OneTapComponent from "@/components/oneTap"
import PaymentCard from "@/components/payment-card"

export default function page({ params }: { params: Promise<{ id: string  }> }) {
  return (<>
    <main className="py-16 md:py-32">
      {/* <OneTapComponent /> */}
      <ContentProduct params={params} />
      <PaymentCard params={params} />
    </main>
  </>
  )
}