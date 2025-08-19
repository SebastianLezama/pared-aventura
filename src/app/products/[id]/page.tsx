import ContentProduct from "@/components/content-5"

export default function page({ params }: { params: Promise<{ id: string  }> }) {
  return (
    <ContentProduct params={params} />
  )
}