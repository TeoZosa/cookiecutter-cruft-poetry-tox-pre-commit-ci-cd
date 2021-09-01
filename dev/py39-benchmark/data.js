window.BENCHMARK_DATA = {
  "lastUpdate": 1630502727689,
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
        "date": 1630502726074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16635.788576752082,
            "unit": "iter/sec",
            "range": "stddev: 0.000002620009540041189",
            "extra": "mean: 60.11136745254531 usec\nrounds: 6575"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4918430.750238444,
            "unit": "iter/sec",
            "range": "stddev: 4.8955444153635306e-8",
            "extra": "mean: 203.3168810909142 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14542.069256641353,
            "unit": "iter/sec",
            "range": "stddev: 0.000007886205996099097",
            "extra": "mean: 68.76600450402206 usec\nrounds: 8881"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152001.2321806046,
            "unit": "iter/sec",
            "range": "stddev: 4.632853116426555e-7",
            "extra": "mean: 6.5788940369366316 usec\nrounds: 45044"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16584.773381174993,
            "unit": "iter/sec",
            "range": "stddev: 0.000001456632615354334",
            "extra": "mean: 60.296271586989405 usec\nrounds: 13550"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4736464.287720939,
            "unit": "iter/sec",
            "range": "stddev: 1.5458184608880582e-8",
            "extra": "mean: 211.127950989191 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}