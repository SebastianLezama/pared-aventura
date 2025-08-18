import ContentProduct, { CerroKey } from "@/components/content-5"

export default function page({ params }: { params: { id: CerroKey } }) {
  return (
    <ContentProduct id={params.id} />
  )
}
