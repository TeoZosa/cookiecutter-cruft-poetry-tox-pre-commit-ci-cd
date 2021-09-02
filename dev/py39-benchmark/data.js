window.BENCHMARK_DATA = {
  "lastUpdate": 1630618280178,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ef21523982d3b93e31f70124fccd1875dd166984",
          "message": "Merge pull request #313 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.7-slim",
          "timestamp": "2021-09-01T13:19:32Z",
          "tree_id": "3822204439498b6b360f56178cbfc869f571d5ee"
        },
        "date": 1630618278000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14286.326419482766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001057634855432335",
            "extra": "mean: 69.99700067305369 usec\nrounds: 11891"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4299678.7213221975,
            "unit": "iter/sec",
            "range": "stddev: 4.897892422114864e-7",
            "extra": "mean: 232.57551664057567 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12046.358034981558,
            "unit": "iter/sec",
            "range": "stddev: 0.000052780245681675355",
            "extra": "mean: 83.01264142208694 usec\nrounds: 9058"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128849.31830127886,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305715565463817",
            "extra": "mean: 7.761003419993063 usec\nrounds: 44445"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14283.260948578494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004691828824178603",
            "extra": "mean: 70.01202341679003 usec\nrounds: 13281"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4227030.4255450545,
            "unit": "iter/sec",
            "range": "stddev: 7.543178773886619e-7",
            "extra": "mean: 236.57269982221266 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}