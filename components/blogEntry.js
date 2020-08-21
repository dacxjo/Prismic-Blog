import React from 'react'
import { Palette } from 'react-palette'
import Link from 'next/link'

class BlogEntry extends React.Component {
  render() {
    const IMAGE_URL = this.props.image
    return (
      <div className="shadow-xl w-64 rounded-lg flex flex-col items-center mr-4 transition duration-500  hover:shadow-2xl">
        <Link href="posts/[id]" as={`/posts/${this.props.uid}`}>
          <a className="text-xs  cursor-pointer">
            <div className="overflow-hidden w-full rounded-t-lg ">
              <img
                className="w-full h-64 object-cover rounded-t-lg transition duration-500 transform hover:scale-105"
                src={this.props.image}
              />
            </div>
          </a>
        </Link>

        <div className="p-5 text-left">
          <h2 className="text-xl text-black text-black">{this.props.title}</h2>
          <p className="text-xs text-gray-700">{this.props.desc}</p>

          <Palette src={IMAGE_URL}>
            {({ data, loading, error }) => (
              <Link href="posts/[id]" as={`/posts/${this.props.uid}`}>
                <a
                  style={{ color: data.vibrant }}
                  className="text-xs  cursor-pointer"
                >
                  Read the post
                </a>
              </Link>
            )}
          </Palette>
        </div>
      </div>
    )
  }
}

export default BlogEntry
