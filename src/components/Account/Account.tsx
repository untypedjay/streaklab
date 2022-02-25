import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Avatar from '../Avatar/Avatar';

interface Props {
    session: any;
}

export default function Account({ session }: Props) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [startsLeft, setStartsLeft] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user: any = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, avatar_url, starts_left`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setStartsLeft(data.starts_left)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, avatar_url, starts_left }: any) {
    try {
      setLoading(true)
      const user: any = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        avatar_url,
        starts_left,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
        <Avatar
        url={avatarUrl}
        size={150}
        onUpload={(url: any) => {
            setAvatarUrl(url)
            updateProfile({ username, avatar_url: url, starts_left: startsLeft })
        }}
        />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </div>
      <p>Next starting side: {startsLeft ? 'left' : 'right'}</p>

      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ username, avatar_url: avatarUrl, starts_left: startsLeft })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}