import { useRouter } from 'next/router'
import IndiceLayout from "../../src/theme/Layout/IndiceLayout"

export default function Separador() {

    const router = useRouter()
    return(
        <div>
        <IndiceLayout
          edicao={''}
          contentRight={router.query.separador}
        />
      </div>
    )
}