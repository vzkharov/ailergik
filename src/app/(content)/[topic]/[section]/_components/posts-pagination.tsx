'use client'

import type { StyleProps } from '~/lib/types'

import { usePaginationUtils } from '~/hooks/use-pagination-utils'
import { usePostsFilterState } from '~/features/(posts)/use-posts-filter-state'

import {
  Pagination,
  PaginationLink,
  PaginationNext,
  PaginationItem,
  PaginationContent,
  PaginationPrevious,
} from '~/components/ui/pagination'

type PostsPaginationProps = StyleProps & {
  total: number
}

const PostsPagination = ({ total, ...props }: PostsPaginationProps) => {
  const [state, setState] = usePostsFilterState(0)

  const setPage = (newPage: number) => setState({ page: newPage })

  const { next, previos, pages, isPrevios } = usePaginationUtils({
    total,
    displayPages: 3,
    page: state.page,
    onPageChange: setPage,
  })

  return (
    <Pagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={previos} aria-disabled={isPrevios} />
        </PaginationItem>

        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink
              onClick={() => setPage(page)}
              isActive={page === state.page}
            >
              {page >= 1 && page <= total ? page : '-'}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PostsPagination }
