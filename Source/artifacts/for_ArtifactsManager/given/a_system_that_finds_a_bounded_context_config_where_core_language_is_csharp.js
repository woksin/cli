/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { an_artifacts_manager } from './an_artifacts_manager';
import { ArtifactsManager } from '../../ArtifactsManager';
import { BoundedContext } from '../../../boundedContexts/BoundedContext';
import { Core } from '../../../boundedContexts/Core';

export class a_system_that_finds_a_bounded_context_config_where_core_language_is_csharp extends an_artifacts_manager {
    constructor() {
        super();
        this.application = 'e29795b6-b501-4d6f-b93c-4c25bab6969d';
        this.boundedContext = 'cde734bc-927f-4feb-a431-02abfc59de79';
        this.boundedContextName = 'BC';
        this.boundedContextCoreLanguage = 'csharp'
        this.boundedContextCore = new Core(this.boundedContextCoreLanguage);
        this.boundedContextManager.getNearestBoundedContextConfig = sinon.stub()
            .returns(
                new BoundedContext(this.application, this.boundedContext, this.boundedContextName, this.boundedContextCore)
            );
        
        this.artifactsManager = new ArtifactsManager(this.inquirerManager, this.boilerPlatesManager, this.boundedContextManager, this.folders, this.fileSystem, logger);
        
    }
}