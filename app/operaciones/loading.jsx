'use client'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import style from './page.module.css'

export default function LoadingPosts () {
  const loadingPosts = []

  for (let i = 0; i < 12; i++) {
    loadingPosts.push(
      <Stack spacing={1}>
        <Skeleton variant='rectangular' width={250} height={150} />
        <Skeleton variant='rectangular' width={250} height={180} />
      </Stack>
    )
  }

  return (
    <div className={style.contents}>
      {loadingPosts}
    </div>
  )
}
