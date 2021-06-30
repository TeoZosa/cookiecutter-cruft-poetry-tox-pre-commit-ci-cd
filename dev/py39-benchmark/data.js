window.BENCHMARK_DATA = {
  "lastUpdate": 1625059618116,
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
          "id": "2cbd8b38e412ed6bf0f43deb87009d2e0e148c0f",
          "message": "Merge pull request #233 from TeoZosa/dependabot/pip/pylint-2.9.1",
          "timestamp": "2021-06-30T13:16:30Z",
          "tree_id": "87d7735a77ddf7f3e14b2a81c23b74be7797adb3"
        },
        "date": 1625059472922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16342.309536741595,
            "unit": "iter/sec",
            "range": "stddev: 0.000033869775973182036",
            "extra": "mean: 61.1908615334785 usec\nrounds: 11779"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5903249.232156849,
            "unit": "iter/sec",
            "range": "stddev: 6.36234357983964e-9",
            "extra": "mean: 169.39823488263855 nsec\nrounds: 55866"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14017.50440671414,
            "unit": "iter/sec",
            "range": "stddev: 0.000041633844388578047",
            "extra": "mean: 71.33937475496832 usec\nrounds: 9681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148842.8549598861,
            "unit": "iter/sec",
            "range": "stddev: 3.689501812806623e-7",
            "extra": "mean: 6.71849515564254 usec\nrounds: 37879"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15877.414775148178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606246443438257",
            "extra": "mean: 62.98254559459082 usec\nrounds: 9738"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2920059.9132416965,
            "unit": "iter/sec",
            "range": "stddev: 1.8877242695892166e-7",
            "extra": "mean: 342.45872677655194 nsec\nrounds: 4131"
          }
        ]
      },
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
          "id": "d6680a337c93aa1087f1124d1e7b30d8295423ec",
          "message": "Merge pull request #234 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.6-slim",
          "timestamp": "2021-06-30T13:21:14Z",
          "tree_id": "e5b08dad44a120de447722f59fe667f1b6b084f2"
        },
        "date": 1625059616100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15122.98248048958,
            "unit": "iter/sec",
            "range": "stddev: 0.000025575128146172518",
            "extra": "mean: 66.1245228109017 usec\nrounds: 9009"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4196276.823911878,
            "unit": "iter/sec",
            "range": "stddev: 8.530032237800222e-8",
            "extra": "mean: 238.30648976751635 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12962.766086435906,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672090274178398",
            "extra": "mean: 77.14402877688187 usec\nrounds: 9174"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124158.57411793013,
            "unit": "iter/sec",
            "range": "stddev: 0.000004918573356307791",
            "extra": "mean: 8.054216207816348 usec\nrounds: 43856"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14835.904966595108,
            "unit": "iter/sec",
            "range": "stddev: 0.000041460810974451675",
            "extra": "mean: 67.40404459664744 usec\nrounds: 13140"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4172781.460331815,
            "unit": "iter/sec",
            "range": "stddev: 3.919772691563226e-7",
            "extra": "mean: 239.64830401648447 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}