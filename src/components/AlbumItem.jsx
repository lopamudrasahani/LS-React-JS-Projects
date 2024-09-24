import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
	// Returns an imperative method for changing the location. Used by <Link>s, but may also be used by other elements to change the location.
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
			<img src={image} className='rounded' alt="" />
			<p className='font-bolf mt-2 mb-1'>{name}</p>
			<p className='text-slate-200 text-sm'>{desc}</p>
		</div>
	)
}

export default AlbumItem
