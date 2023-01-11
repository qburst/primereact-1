import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
                <p>Following is the list of structural style classes</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-datascroller</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-content</td>
                                <td>Wrapper of item container.</td>
                            </tr>
                            <tr>
                                <td>p-datascroller-list</td>
                                <td>Item container element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}