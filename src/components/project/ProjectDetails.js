import React from 'react'

const ProjectDetails = props => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { id }</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptatum modi deserunt eius velit atque fuga eaque, autem cumque aliquam consequuntur tempore ducimus quod deleniti, alias asperiores illum? Ea, doloribus.</p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Me</div>
            <div>2ns September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails