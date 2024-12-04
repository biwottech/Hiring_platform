import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Plans</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-8">
        <div className="flex justify-between">
          {/* Projects Section */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Frontend Developer Position</li>
              <li>Full Stack Engineer</li>
              <li>Backend Developer</li>
            </ul>
          </div>

          {/* Calendar Section */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>
            <div className="calendar">
              <div className="grid grid-cols-7 gap-2">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>31</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div className="bg-blue-500 text-white">25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          </div>

          {/* Project Notes Section */}
          <div className="w-1/3">
            <h2 className="text-xl font-semibold mb-4">Project Notes</h2>
            <textarea
              className="w-full h-32 p-2 border rounded"
              placeholder="Add general project notes here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
