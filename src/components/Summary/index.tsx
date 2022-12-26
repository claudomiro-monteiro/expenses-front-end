import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Summary() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          origin: "center",
          perView: 1,
          spacing: 15,
        }
      },
      "(min-width: 700px)": {
        slides: {
          perView: 2,
          spacing: 15,
        }
      },
      "(min-width: 1130px)": {
        slides: {
          perView: 3,
          spacing: 15,
        }
      },
    },
    // slides: {
    //   perView: 1,
    //   spacing: 15,
    // },
  })
  const summary = useSummary()

  return (
    <SummaryContainer ref={sliderRef} className='keen-slider'>
      <SummaryCard className='keen-slider__slide'>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard className='keen-slider__slide'>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green" className='keen-slider__slide'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
