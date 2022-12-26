import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer, SearchFormInput } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/transactionsContext'

const searchFormSchema = z.object({
  initial: z.string(),
  final: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data.initial, data.final)
    await fetchTransactions(data.initial, data.final)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormInput>
        <input
          type="date"
          // placeholder="Busque por transações"
          {...register('initial')}
        />
        <input
          type="date"
          {...register('final')}
        />

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormInput>
      {/* <div> */}

      {/* </div> */}
    </SearchFormContainer>
  )
}
