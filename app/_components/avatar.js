import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarComposed({ pfp, pfp_fallback }) {
  return (
    <Avatar>
      <AvatarImage src={pfp} />
      <AvatarFallback>{pfp_fallback}</AvatarFallback>
    </Avatar>
  )
}
