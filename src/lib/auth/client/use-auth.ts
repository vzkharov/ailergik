'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { client } from '~/api/client'

const QUERY_KEY = 'user'

const useAuth = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const user = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => client.api.user.$get().then(res => res.json()),
    retry: 0,
  })

  const sendOtpMutation = useMutation({
    mutationKey: [QUERY_KEY, 'send-otp'],
    mutationFn: client.api.user.login.$post,
    onSuccess: () => toast.success('Код подтверждения отправлен вам на почту!'),
  })

  const checkOtpMutation = useMutation({
    mutationKey: [QUERY_KEY, 'check-otp'],
    mutationFn: client.api.user.login.check.$post,
    onSuccess: () => {
      toast.success('Вы успешно вошли!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  const signOutMutation = useMutation({
    mutationKey: [QUERY_KEY, 'sign-out'],
    mutationFn: client.api.user.logout.$post,
    onSuccess: () => {
      toast.info('Вы вышли из учетной записи')
      router.push('/')
      router.refresh()
      user.refetch()
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  return {
    user,
    send: sendOtpMutation,
    check: checkOtpMutation,
    signOut: signOutMutation,
  }
}

export { useAuth }
