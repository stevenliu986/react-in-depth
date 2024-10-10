import { UserDataForm } from "./UserDataForm";
import { UserDetails } from "./UserDetails";
import { UserPreferences } from "./UserPreferences";
import { useUserProfile } from "./useUserProfile.js";

export function LongUserProfile({ userId }) {
  const {
    userData,
    editMode,
    userPreferences,
    toggleEditMode,
    updatePreferences,
  } = useUserProfile();

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      {editMode ? (
        <UserDataForm userData={userData} onSave={toggleEditMode} />
      ) : (
        <UserDetails userData={userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? "Save Changes" : "Edit Profile"}
      </button>
      <UserPreferences
        preferences={userPreferences}
        onPreferencesChange={updatePreferences}
      />
    </div>
  );
}
