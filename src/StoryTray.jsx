export default function StoryTray({ stories }) {

    const storiesCopy = (story) => [...stories, story]

    const newStory = {
        id: 'create',
        label: 'Create Story'
    }

    const storiesList = storiesCopy(newStory)

    return (
        <ul>
            {storiesList.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}
