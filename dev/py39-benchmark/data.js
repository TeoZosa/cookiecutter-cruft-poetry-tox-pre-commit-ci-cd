window.BENCHMARK_DATA = {
  "lastUpdate": 1612275724804,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "385306f5ea06143ad96ad17b39218d6acef99ee6",
          "message": "Merge pull request #60 from TeoZosa/dependabot/pip/cruft-2.6.1",
          "timestamp": "2021-02-02T14:17:51Z",
          "tree_id": "33e8b70ae624d35770a074ba241220138bc1691e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/385306f5ea06143ad96ad17b39218d6acef99ee6"
        },
        "date": 1612275723260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14983.38186136767,
            "unit": "iter/sec",
            "range": "stddev: 0.000012415955445847677",
            "extra": "mean: 66.74060697727694 usec\nrounds: 12269"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4532184.157650038,
            "unit": "iter/sec",
            "range": "stddev: 6.489038839406167e-8",
            "extra": "mean: 220.64416740710934 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13893.100135764853,
            "unit": "iter/sec",
            "range": "stddev: 0.000010853819072853546",
            "extra": "mean: 71.97817551359262 usec\nrounds: 8176"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 206555.75840380453,
            "unit": "iter/sec",
            "range": "stddev: 0.000001367589693489087",
            "extra": "mean: 4.841307779205351 usec\nrounds: 58477"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15938.093840249794,
            "unit": "iter/sec",
            "range": "stddev: 0.000008940603652508248",
            "extra": "mean: 62.74276020853992 usec\nrounds: 13812"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4481035.312115102,
            "unit": "iter/sec",
            "range": "stddev: 7.264268328942528e-8",
            "extra": "mean: 223.16271360244832 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}